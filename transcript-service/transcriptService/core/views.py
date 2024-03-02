import requests
import pip
from youtube_transcript_api import YouTubeTranscriptApi
from django.shortcuts import HttpResponse

def test(request):
    return HttpResponse("hello wordl!")

def get_youtube_transcript(request):
    try:
        # # Install youtube-transcript-api if not already installed
        # pip.main(['install', 'youtube-transcript-api'])
        video_url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

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

            return HttpResponse(full_transcript)

    except Exception as e:
        print(f"Unexpected error: {e}")
        return HttpResponse("")  # Return empty string on unexpected errors



