#!/usr/bin/env bash
if command -v html2pdf > /dev/null
then
  PRINT_OUTPUT_DIR="./local/prints";
  if [ ! -d $PRINT_OUTPUT_DIR ]
  then
    mkdir -p $PRINT_OUTPUT_DIR;
  fi
  PRINT_OUTPUT="${PRINT_OUTPUT_DIR}/cv.pdf";
  rm $PRINT_OUTPUT;
  html2pdf ./out/cv.html --paper A4 --background --margin 0 -o $PRINT_OUTPUT;
else
  echo "'html2pdf' not found. Run the following command to install it:";
  echo "\tcargo install html2pdf --vers 0.3.1";
fi
