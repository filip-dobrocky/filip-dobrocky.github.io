# shell.nix
let
  # We pin to a specific nixpkgs commit for reproducibility.
  # Last updated: 2025-08-04. Check for new commits at https://status.nixos.org.
  pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/6a489c9482ca676ce23c0bcd7f2e1795383325fa.tar.gz") {};
in pkgs.mkShell {
  packages = [
    (pkgs.python3.withPackages (python-pkgs: with python-pkgs; [
      # select Python packages here
      md2pdf
    ]))
  ];
}