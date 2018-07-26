NAVBARS
    - NOT LOGGED IN
        - Logo, SEARCH INPUT & BUTTON, SIGNUP BUTTON, LOGIN BUTTON
            - SEARCH BUTTON grabs search input and redirects user to the      SEARCH page
            - SIGNUP BUTTON redirects user to the SIGNUP page
            - LOGIN BUTTON renders a LOGIN FORM, user remains on MAIN page
                -LOGIN FORM takes username & password
                    -LOGIN FORM SUBMIT BUTTON authenticates a user and renders the MY TUTORIALS page
    - LOGGED IN
        -Logo, SEARCH INPUT & BUTTON, LOGOUT BUTTON
            - SEARCH BUTTON grabs search input and redirects user to the      SEARCH page
            - LOGOUT BUTTON de-authenticates a user and renders the MAIN      page

PAGES    

MAIN PAGE
    - Main page is the same regardless of if user is logged in, aside from login & signup buttons  not appearing if logged in
    - Has an image banner, either just about Tutory or an advertisement for   a sale or a genre of tutorials
    - Shows recently added or featured tutorials

LOGIN PAGE
    - Could maybe just be a dropdown login form upon 'Login' button click? 
    - Upon login, brings the user to 'MY TUTORIALS' page

SIGNUP PAGE
    - Input fields for First Name, Last Name, Username, Email, Password & Password match

SEARCH PAGE
    - Displays all tutorials matching the keyword entered in the search bar
    - Shows another search input
    - STRETCH GOAL - does not show tutorials that user has added to their tutorials

MY TUTORIALS PAGE (Requres Login)
    - Displays "Welcome Back Jill"
    - Shows user's added tutorials that other users created & the tutorials that they created

    -ADDED TUTORIALS
        - Clicking on any added tutorial renders that tutorial's INDIVIDUAL       TUTORIAL page
        - Added tutorials include a REMOVE BUTTON which will alert "Are you sure?" with a second REMOVE BUTTON, and once clicked will remove that tutorial from the MY TUTORIALS page
        - Added tutorials are categorized by:
            - Tutorials that a user has started watching
            - Tutorials that a user has not started watching
            - Tutorials that a user has finished watching
            - Recommended tutorials for that user
        - STRETCH GOAL - allow a user to create their own categories & rearrange the way their added tutorials are displayed   

    - CREATED TUTORIALS
        - Clicking on any created tutorial renders that tutorial's         INDIVIDUAL TUTORIAL page
        - Created tutorials include an EDIT BUTTON & a DELETE BUTTON
            - EDIT BUTTON renders the EDIT A TUTORIAL PAGE
            - DELETE BUTTON will alert "Are you sure" with a second DELETE BUTTON & then delete that tutorial, and stay on MY TUTORIALS page
        - Created tutorials are listed by date added
        - STRETCH GOAL - allow a user to rearrange the order that their tutorials are listed   

INDIVIDUAL TUTORIAL PAGE
    - Description of the tutorial, 2-3 lines
    - Star rating based on user ratings
    - ADD BUTTON
        - ADD BUTTON adds this tutorial to a user's MY TUTORIALS page in the 'to be watched' category, and stays on the INDIVIDUAL TUTORIAL page
    - Tutorial video w/ all video control buttons included
    - About the creator section including a photo of the creator & a short bio
    - Tutorial Notes
        Instructions for the tutorial (including download instructions) & general notes about the tutorial
    - STRETCH GOAL - Downloads
        Can include images & text files to complement the tutorial for use either during the tutorial or after a tutorial is finished
        -Examples:
    - Links
        Any relevant links to complement the tutorial
    - Comments & Reviews
        Shows all comments & reviews
        STRETCH GOAL - Only show the most recent comments & reviews & have a button to view all comments & reviews
        STRETCH GOAL - Filter reviews by star rating
        STRETCH GOAL - Delete & Edit buttons for comments & reviews if the comment or review was posted by the user
        Comment & Review Form:
            Text input, star review meter, submit button
                Submit button uploads the comment/review & stays on the INDIVIDUAL TUTORIAL page
            Users can leave general comments about the tutorial
            Users can leave a review of the tutorial including a star rating
            STRETCH GOAL - only users who have added this tutorial can leave a star rating  
    - Ask the teacher
        Exact same as Comments & Reviews except alerts the teacher each time a question is posted 

USER PROFILE PAGE (Requres Login)
    - Photo
    - About me bio
    - Contact information  
    - Indicator if user is also a teacher
        - If teacher:
            - Tutorials created displays tutorials created by this user
            - STRETCH GOAL - Reviews & comments area shows most recent reviews & comments posted on any of user's created tutorials
    - Favorite tutorials shows user's favorite tutorials
    - STRETCH GOAL - if user is 'public', will automatically show either a user's most recently added tutorials or a user's completed tutorials   

EDIT PROFILE PAGE (Requres Login)
    - Add/change photo
    - Add/update bio
    - Add/update contact information
    - Arrage created tutorials display order
    - Select & arrange favorite added tutorials
    - STRETCH GOAL - select 'private' or 'public' profile which will determine whether or not to display user's added tutorials

CREATE A TUTORIAL PAGE (Requres Login)
    - Instructions on best practices for creating a tutorial
    - Input to add a description 
    - Input to upload a profile photo
    - Input to add a bio
    - Input to add tutorial notes
    - STRETCH GOAL - Input to upload downloadable material & description

EDIT A TUTORIAL PAGE (Requres Login)
    - Edit description
    - Change profile photo
    - Edit bio
    - Edit tutorial notes
    - STRETCH GOAL - Change downloadable material & description

STRETCH GOAL - POPULAR TUTORIAL CATEGORY PAGES
    - Individual pages showcasing tutorials in popular categories ie makeup tutorials, music tutorials, etc...

- Do we want to have actual separate pages for each page or just render elements based on button clicks?
- How do we want to breakup the work?
- Do yall have preferences for things that you definitely want to build and/or don't want to build?
- How do we feel about using Browserify?
- How do we feel about using Materialize instead of Bootstrap? Its easy to learn. 
     





