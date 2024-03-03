import json
import re
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from youtube_transcript_api import YouTubeTranscriptApi

@csrf_exempt
@require_POST
def get_youtube_transcript(request):
    try:
        json_data = json.loads(request.body)
        video_url = json_data.get('video_url', None)

        if not video_url:
            return JsonResponse("Video URL is required", status=400)

        video_id = get_video_id(video_url)
        if not video_id:
            return JsonResponse("Invalid YouTube URL", status=400)

        # Fetch the transcript using requests library
        transcript = YouTubeTranscriptApi.get_transcript(video_id)

        # print("transcript")
        # print(transcript)

        # Concatenate all transcript lines, maintaining separation
        full_transcript = ""
        for line in transcript:
            full_transcript += line["text"] + "\n"  # Combine lines with newline

        return JsonResponse({'transcript': full_transcript}, status=200)

    except Exception as e:
        print(f"Unexpected error: {e}")
        return JsonResponse("Error processing request", status=500)

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



