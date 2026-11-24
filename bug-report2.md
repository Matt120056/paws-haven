
# Shift Board Bug Report for quiz 8

| Bug | Problem | Fix | Test result |
|---|---|---|---|
| 1 | The volunteer form was not preventing its default submission. | Added event.preventDefault() to stop the page from reloading. | Form submits without reloading. |
| 2 | Volunteer names containing only spaces could be accepted. | Added .trim() to remove whitespace before validation. | Three spaces are rejected. |
| 3 | Empty volunteer names were not properly handled. | Added an if statement checking volunteerName === "". | Empty names are rejected. |
| 4 | The error message was not cleared after a successful submission. | Set shiftMessage.textContent to an empty string after validation. | Error disappears after a valid name is entered. |
| 5 | The volunteer counter did not correctly update after sign-ups. | Incremented signedUp and updated countText.textContent. | Two volunteers display as 2 volunteers signed up. |
| 6 | Volunteer names could be interpreted as HTML if inserted unsafely. | Used textContent instead of innerHTML. | `<b>Ana</b>` displays as plain text. |
