import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constant/index";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey, How is it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! just working on some new features",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Theme</h2>
            <p className="text-sm text-base-content/70">
              Choose a theme for your chat interface
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-8">
            {THEMES.map((t) => (
              <div
                key={t}
                className={`relative rounded-xl overflow-hidden border border-base-200 transition-all ${
                  theme === t
                    ? "ring-2 ring-primary ring-offset-2"
                    : "hover:scale-[1.02]"
                }`}
                data-theme={t}
              >
                <button
                  className="w-full h-full text-left"
                  onClick={() => setTheme(t)}
                >
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium capitalize">{t}</span>
                      {theme === t && (
                        <span className="badge badge-primary badge-sm">
                          Active
                        </span>
                      )}
                    </div>

                    {/* Color palette preview */}
                    <div className="grid grid-cols-4 gap-1 h-6 rounded overflow-hidden">
                      <div className="bg-primary"></div>
                      <div className="bg-secondary"></div>
                      <div className="bg-accent"></div>
                      <div className="bg-neutral"></div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/*Preview Section */}
          <h3 className="text-lg font-semibold mb-3 ">
            <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg ">
              <div className="p-4 bg-base-200 ">
                <div className="max-w-lg mx-auto">
                  {/*Mock Chat UI */}
                  <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
                    {/*chat header */}
                    <div className="px-4 py-3 border-b border-base-300 bg-case-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                          C
                        </div>
                      </div>
                      <h3 className="font-medium text-sm">Cucung Sukardi</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                  {/*Chat Messages */}
                  <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                    {PREVIEW_MESSAGES.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.isSent ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-xl p-3 shadow-sm ${
                            message.isSent
                              ? "bg-primary text-primary-content"
                              : "bg-base-200"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-[10px] mt-1.5 ${
                              message.isSent
                                ? "text-primary-content/70"
                                : "text-base-content/70"
                            }`}
                          >
                            12:00 PM
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/*Chat Input */}
                  <div className="p-4 border-t border-base-300 bg-base-100 ">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1 text-sm h-10"
                        placeholder="Type a message"
                        value="This is a preview"
                        readOnly
                      />
                      <button className="btn btn-primary h-10 min-h-0">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
