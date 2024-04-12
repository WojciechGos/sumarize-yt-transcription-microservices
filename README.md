## YouTube Video Summarizer

This project is a web application developed to summarize YouTube videos by extracting their transcripts from the YouTube platform, saving the video summaries into a database, and associating them with specific users. The backend is implemented using Spring Boot, while the frontend is built with React TypeScript and utilizes Tailwind CSS for styling.

### Features  

- **YouTube Video Transcription**: Automatically fetches transcripts of YouTube videos.  
- **Video Summarization**: Summarizes the content of YouTube videos.  
- **User Authentication**: Allows users to create accounts and log in securely.  
- **Data Persistence**: Stores summarized video content and user information in a database.  
- **User Association**: Associates video summaries with specific users for personalized content access.  

### Technologies Used  

- **Spring Boot**: Provides a powerful platform for building Java-based backend applications.  
- **React TypeScript**: Offers a modern and efficient JavaScript library for building user interfaces.  
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.   



### Configuration
Set up the database configuration in secrets.properties file located in the src/main/resources directory.


```
spring.security.oauth2.client.registration.google.client-id=
spring.security.oauth2.client.registration.google.client-secret=
jwt.secret=
spring.security.user.name=
spring.security.user.password=
```
