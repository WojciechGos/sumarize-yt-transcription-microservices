import React, { FC } from "react"
import classnames from "classnames"

interface ISummarizeFormProps {
  goToSummarizedContent: (e: React.FormEvent) => void
  videoLink: string
  updateVideoLinkForm: (value:string)=>void
  showError: boolean
}

const SummarizeForm: FC<ISummarizeFormProps> = ({
  goToSummarizedContent,
  videoLink,
  updateVideoLinkForm,
  showError,
}) => {
  return (
    <main className="min-h-full flex items-center justify-center py-12 ">
      <div className="w-full text-center space-y-8">
        <form className="mt-8 space-y-6" onSubmit={goToSummarizedContent}>
          <h3 className="text-5xl ">Paste your youtube video link below</h3>
          <div className="rounded flex justify-center shadow-sm -space-y-px">
            <div className="w-[400px]">
              <input
                id="videoid"
                name="videoid"
                type="text"
                value={videoLink}
                onChange={(e) => updateVideoLinkForm(e.target.value)}
                required
                className={classnames(
                  "appearance-none rounded-none relative block",
                  "w-full px-3 py-2 border border-gray-300",
                  "placeholder-gray-500 rounded-t-md",
                  "focus:outline-none focus:ring-indigo-500",
                  "focus:border-indigo-500 focus:z-10 sm:text-sm",
                  {
                    "text-red-500 focus:ring-red-500 border-red-500 focus:border-red-500":
                      showError,
                  }
                )}
                placeholder="https://www.youtube.com/watch?v=video_id"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative max-w-[100px] flex justify-center
                    py-2 px-4 border border-transparent text-sm font-medium
                    rounded-md text-white bg-indigo-600 hover:bg-indigo-500
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-indigo-500"
            >
              Summarize
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SummarizeForm
