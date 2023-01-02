Select all specific CSS JS
(http).*?.(www|images).*?.(css|js|png|gif|jpg|svg|woff2|woff|ttf|eot|json|htc)

Search for URLs
https://web.archive.org/cdx/search/cdx?collapse=urlkey&fl=original&url=apple.com/ios/*

Get the latest WayBack Machine Timestamp
https://archive.org/wayback/available?url=apple.com/macos/mojave-preview/styles/overview.built.css
https://archive.org/wayback/available?url=apple.com/macos/mojave

REGEX
Match anything after special characters
(http:|\?|:80|%|_|&|,|\(|\)|json|css|js)(.*)
Match between two strings
http(.*)http
\../(.*)http
(http|\../)(.*)http

Match CSS and JS
http(.*)(js|css)
Match Images
\("(.*?)(png|gif|jpg|svg|woff2|woff|ttf|eot)"\)
Match src CSS / JS
="/(ac|metrics|wss|v)(.*)(css|js|1|2)"
Match Fonts
/(wss)(.*?)(woff2|woff|ttf|eot)

To download resources:
Edit the resources.sh in apple/local/terminal
Open Terminal
SH /Users/josephvan/Documents/Development/Apple/local/terminal/resources.sh


wayback_machine_downloader https://www.apple.com/wss/fonts/SF-Pro-Icons/v1/SFProIcons_regular.ttf

MacOS HTML
https://web.archive.org/cdx/search/cdx?url=apple.com/macos/*&filter=mimetype:text/html&collapse=urlkey&fl=original


1. Get The URL:
https://web.archive.org/web/20151229014315/https://www.apple.com/ios/photos/

2. Terminal | Wayback Machine Download HTML
wayback_machine_downloader https://www.apple.com/wss/fonts/SF-Pro-Icons/v1/SFProIcons_regular.ttf
wayback_machine_downloader http://www.apple.com/pages/ -e -f20161226025842 -t20170626025842 -d2017

3. Remove Unnecessary Files
<(link|meta) (src=\"\/metrics|rel=\"alternate|property|name=\"twitter|name=\"ac-).*?(\>)
(aria-label|data-analytics-|data-hires|data-store-|data-search-|data-string).*?(\").*?(\")
<script type="application/ld+json">
<input type="checkbox" id="ac-gn-menustate" class="ac-gn-menustate" />
globalnav
globalfooter
Empty Space |"	" "       "

4. Match CSS/JS to download on SiteSucker
http(.*)(js|css)
="/(ac|metrics|wss|v)(.*)(css|js|1|2)"
(http).*?.(www|images).*?.(css|js|png|gif|jpg|svg|woff2|woff|ttf|eot|json|htc)
\("(.*?)(png|gif|jpg|svg|woff2|woff|ttf|eot)"\)

5. Replace Fonts/URLs
<link rel="stylesheet" href="/wss/fonts/SF-Pro.css" />
Remove: (http).*?.(www|images).*?.com
/wss/fonts?family=Myriad+Set+Pro&amp;v=1 -> /wss/fonts/Myriad-Set-Pro.css
