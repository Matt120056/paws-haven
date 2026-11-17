# Shift Board Bug Report

| # | What I saw | Where I found it | Cause | Fix |
|---|---|---|---|---|
| 1 | JavaScript could not find the HTML elements properly. | shift-board.html | Script loaded before the HTML was parsed. | Added the defer attribute to the script tag. |
| 2 | The volunteer could not be added to the list. | shift-board.js | The JavaScript selector used the wrong HTML ID (#shift-lst). | Changed it to #shift-list. |
| 3 | The signup counter caused an assignment error. | shift-board.js | The counter was declared using const, so its value could not change. | Changed const to let. |
| 4 | Empty names were not properly rejected. | shift-board.js | A single = was used instead of ===, assigning rather than comparing. | Changed = to === in the if condition. |
| 5 | Entering HTML as a name caused it to render as formatting. | shift-board.js | innerHTML interpreted user input as HTML, creating an XSS security vulnerability. | Replaced innerHTML with textContent. |
| 6 | The page reloaded after clicking Sign me up. | shift-board.js | The form performed its default submission behaviour. | Added event.preventDefault() to stop the reload. |