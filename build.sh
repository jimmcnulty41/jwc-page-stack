sed -z "s|\$HTML_TEXT|$(cat src/main.html)|g" src/main.js > build/main.js
