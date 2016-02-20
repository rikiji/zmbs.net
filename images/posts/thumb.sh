for e in png jpg; do
  for i in *.$e; do convert -geometry 600x "$i" "th-$(basename $i .$e).$e"; done
done
