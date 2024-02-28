import requests

def get_youtube_transcript(video_url):
    """
    Retrieves the transcript of a YouTube video using the youtube-transcript-api library.

    Args:
        video_url (str): The URL of the YouTube video.

    Returns:
        str: The full transcript of the video, or an empty string if the request fails.

    Raises:
        Exception: If an error occurs during the API call.
    """

    try:
        # Install youtube-transcript-api if not already installed
        import pip
        pip.main(['install', 'youtube-transcript-api'])

        from youtube_transcript_api import YouTubeTranscriptApi

        with YouTubeTranscriptApi() as transcript_api:
            # Extract video ID from the URL
            video_id = video_url.split("/")[-1].split("?")[0]

            # Fetch transcript data, handling potential errors
            try:
                transcript = transcript_api.get_transcript(video_id)
            except Exception as e:
                print(f"Error fetching transcript: {e}")
                return ""  # Return empty string on error

            # Concatenate all transcript lines, maintaining separation
            full_transcript = ""
            for line in transcript:
                full_transcript += line["text"] + "\n"  # Combine lines with newline

            return full_transcript

    except Exception as e:
        print(f"Unexpected error: {e}")
        return ""  # Return empty string on unexpected errors

# Example usage
video_url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
transcript = get_youtube_transcript(video_url)

if transcript:
    print(transcript)
else:
    print("Failed to retrieve transcript.")
