import re
from md2pdf.core import md2pdf

# Paths
input_md = "../content/about/index.md"
output_md = "cv_preprocessed.md"
output_pdf = "cv.pdf"
css_path = "cv-pdf-style.css"  # Adjust as needed


def load_svg(path):
    with open(path, "r", encoding="utf-8") as f:
        svg = f.read().replace('\n', '').replace('"', "'")
    # Insert width and height attributes into the <svg> tag
    svg = re.sub(r'<svg([^>]*)>', r'<svg\1 width="1em" height="1em" style="vertical-align:middle; margin-right:0.3em;">', svg)
    return svg

house_svg = load_svg("fontawesome-free-7.0.0-web/svgs/solid/house.svg")
phone_svg = load_svg("fontawesome-free-7.0.0-web/svgs/solid/phone.svg")
envelope_svg = load_svg("fontawesome-free-7.0.0-web/svgs/solid/envelope.svg")
globe_svg = load_svg("fontawesome-free-7.0.0-web/svgs/solid/globe.svg")

header = f"""
<div class='header'>
    <div class='name-row'>
        <span class='title'>Ing.</span>
        <span class='name'>Filip Dobrocký</span>
    </div>
    <span class='location'>
        {house_svg} Brno, CZ
    </span>
    <div class='contact-row'>
        <span>
            {phone_svg} <a href="tel:+420705915336">+420 705 915 336</a>
        </span>
        <span>
            {envelope_svg} <a href="mailto:filip.dobrocky@gmail.com">filip.dobrocky@gmail.com</a>
        </span>
        <span>
            {globe_svg} <a href="https://filip-dobrocky.github.io">filip-dobrocky.github.io</a>
        </span>
    </div>
</div>
"""

def preprocess_markdown(input_path, output_path):

    with open(input_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove Hugo front matter
    content = re.sub(r"^---.*?---\s*", "", content, flags=re.DOTALL)

    # Extract content after '# CV'
    match = re.search(r"# CV(.*)", content, flags=re.DOTALL)
    cv_content = match.group(1) if match else content

    # Replace Hugo shortcodes with HTML tags
    cv_content = cv_content.replace("{{< columns>}}", "<span class=\"cv-row\">\n<span class=\"cv-year\">")
    cv_content = cv_content.replace("{{< column>}}", "</span>\n<span class=\"cv-detail\">")
    cv_content = cv_content.replace("{{< endcolumns>}}", "</span>\n</span>")

    final_content = header + cv_content.strip()

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(final_content)

def generate_pdf(md_path, pdf_path, css_path):
    # Use md2pdf to convert markdown to PDF
    md2pdf(pdf_path, md_file_path=md_path, css_file_path=css_path)

if __name__ == "__main__":
    preprocess_markdown(input_md, output_md)
    generate_pdf(output_md, output_pdf, css_path)
    print(f"PDF generated at {output_pdf}")