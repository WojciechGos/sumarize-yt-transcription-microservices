import requests
import pip
from youtube_transcript_api import YouTubeTranscriptApi
from django.shortcuts import HttpResponse
import re
import json
# from django.views.decorators.http import require_POST

# @require_POST
def get_youtube_transcript(request):
    try:
        print(request.GET.get('video_url'))
        body = json.loads(request.GET.get('video_url'))
        print("//////////////////////////////////////////////////////")
        print(body)
        video_url = body['video_url']
        print(video_url)
       
        # Extract video ID from the URL
        video_id = get_video_id(video_url)
        print(video_id)
        # Fetch transcript data, handling potential errors
        try:
            transcript = YouTubeTranscriptApi.get_transcript(video_id)
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
        return HttpResponse("error")  # Return empty string on unexpected errors



def get_video_id(url):
    """Extracts the video ID from a YouTube URL.

    Args:
        url: The YouTube URL (https://www.youtube.com/watch?v=VIDEO_ID)

    Returns:
        The extracted video ID, or None if not found.
    """

    # Regular expression to match the video ID pattern
    pattern = r"(?<=v=)([a-zA-Z0-9_-]+)"

    # Match the URL against the pattern
    match = re.search(pattern, url)

    # Extract the video ID if found, otherwise return None
    if match:
        return match.group(1)
    else:
        return None
