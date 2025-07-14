You have wireframes pdfs for a signup flow for a website that finds special deals on clothes, handbags and accesories based on users personal preferences.

The signup form is fairly complex and broken into 3 steps in order not to scare away users.

The task is to recreate this form in HTML and CSS. You should focus on using the right HTML form widgets for the job, applying the general layout. There is no visual design provided, so you can choose colors etc. but no points are awarded for good or bad design so it is suggest that you just leave all of the form input with the stock styling and only try to refine this if you have completed all other tasks.

Currently you are expected to create 3 separate HTML files and set up links between them using anchor (<a>) tags.

There is a progress bar that will indicate how far the user is. If you have time, try to use CSS transitions to animate it so the bar goes from 0-1 on the first page, 1-2 on the second page and so on (with a smooth and nice animation).

Below is an overview of the fields in the form and how they should be validated. To figure out the right regular expression pattern try googling for something like ("regex only letters") and use something like [this website](https://regexr.com/) to test that the pattern you have found works correctly.

| Field name                   | Required | Validation criteria                                    |
| ---------------------------- | -------- | ------------------------------------------------------ |
| First name                   | yes      |                                                        |
| Last name                    | yes      |                                                        |
| Country                      | yes      |                                                        |
| Street address               | yes      |                                                        |
| Post code                    | yes      | Assume danish address, so allow only 4 letters.        |
| Profile description          | no       | Maximum 500 characters                                 |
| Shipping address             | yes      |                                                        |
| Email                        | yes      | Allow only valid email addresses.                      |
| Phone                        | no       | Allow only valid phone numbers                         |
| Password                     | yes      | Minimum 10 characters, uppercase and lowercase letters |
| Password repeat              | yes      | Minimum 10 characters, uppercase and lowercase letters |
| Newsletter                   | yes      | One radio option must be selected                      |
| Kind of items                | no       | Must be possible to select 0, 1 or many options.       |
| "Resemble your style" images | no       | Must be possible to select 0, 1 or many options.       |
| Name on creditcard           | yes      |                                                        |
| Card type                    | yes      |                                                        |
| Credit card number           | yes      | Only numbers allowed. Exactly 16 digits.               |
| Expiry month                 | yes      |                                                        |
| Expiry year                  | yes      |                                                        |
| CCV                          | yes      | Only numbers. Exactly 3 digits.                        |

## Form validation _optional_

For the forms create sensible form validation. Read up on form validation [here](https://css-tricks.com/form-validation-part-1-constraint-validation-html/)

## Hand in Homework:

Create a PR by using git, like you did in GIT homerowk (try to do it with one commit).
