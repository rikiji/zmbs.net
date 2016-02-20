for i in *.png; do convert -geometry 600x "$i" "th-$(basename $i .png).png"; done
