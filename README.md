# Library 📖
![Screenshot of the Library.](/screenshot.png)
## Description
The Library app allows you to add your favorite books with all the basic information, switch the read or favorite status, delete books and clear your library at once using the clear button. This [Library project](https://www.theodinproject.com/lessons/node-path-javascript-library) is a part of [The Odin Project](https://www.theodinproject.com/dashboard)'s curriculum. The Odin Project provides a high quality web development education maintained by an open source community.
## Live Preview
The [Library app](https://haminimi.github.io/library/).
## Main Features
- **Switch Read Status:** The switch button enables the changing of a book's read status and provides an engaging and responsive effect.
- **Favorite Books and Favorite Button:** An user is able to add books to the list of favorite books by using the favorite button on a book card or by adding a book to the favorites while adding a new book through the modal.
- **Delete and Clear:** The delete button removes a book card from the display and, if the book was on the list of favorite books, it is also removed from the favorites. The clear button removes all existing cards from the display and, if they are on the list of favorite books, they are also removed from the favorites.
- **Prevent Duplicate Books:** The app doesn't allow the creation of duplicates, but if e.g. two books have the same titles but different authors, that isn't considered a duplicate and therefore the creation of two such books is possible without any restrictions.
- **Modern and Aesthetic Design:** The library boasts a sleek and minimalist user interface, characterized by clean lines and a clutter-free design.
- **Responsive Design:** The app provides consistent user experience across various screen sizes.

**To Do:**
- **Storage:** Later in the course this feature will be implemented.
- **Drag and Drop to Reorder**
- **Easily Close Modal:** This feature is inspired by [Web Dev Simplified's solution](https://blog.webdevsimplified.com/2023-04/html-dialog/). It's implementation allows for closing a modal when a user clicks outside of it. I did implement this feature and it worked completely fine in the WebKit browsers, but there was the issue with closing a modal when a user clicks on the select element in Firefox. At the moment this chunk of code is commented out.
- **Dark Mode**
- **Keyboard Support**
## Tech
**The project is built with:**
- HTML
- Vanilla JavaScript
- Vanilla CSS

**Tools**
- Visual Studio Code
- Git
## Covered Topics
**This section mentions the main topics covered during project work and prior lessons**
- Objects
- Function Constructors
- Classes
- DOM Manipulation
- Modal and Dialog Elements
- Git Branching
- Animations
## Reflection
The code should probably be more organized, and I intend to work on it in the future, refactoring the current spaghetti code into a more organized and well-structured pattern. In particular, the main displayBook function appears a bit messy at the moment. Nevertheless, I am currently satisfied with the functionality and the overall project's outcome. I am excited to see the new [selectmenu](https://open-ui.org/) element in action and to see some other changes that will give us more control over the appearance of certain web elements, especially forms and related components.
## Credits
- Icon used for the favicon image is from ['Book icons' created by Freepik - Flaticon](https://www.flaticon.com/free-icons/book).
- Previously mentioned [feature inspired by Web Dev Simplified](https://blog.webdevsimplified.com/2023-04/html-dialog/).
## Author
- [GitHub](https://github.com/Haminimi)
- [Exercism](https://exercism.org/profiles/Haminimi)
- [LeetCode](https://leetcode.com/Haminimi/)
- Email: haminimi.dev@gmail.com
## Happy Coding!