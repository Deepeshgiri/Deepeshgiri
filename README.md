### Hi there 👋
 ## My name is Deepesh Kumar,
 ### I am actively looking for job.
I am a full-stack Developer (I think so!!).
I’m currently working on: diffrent language (without mastering any).
I’m currently learning java script.
I’m looking for help with finding a job or Project. any help will be appreciated.😄
Ask me about hardware related question , Software , Games!



name: Generate Snake Game

on:
  # Trigger the workflow on a schedule (every day at midnight)
  schedule:
    - cron: "0 0 * * *"
  # Allows to manually run the workflow from the Actions tab
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout the repository content
        uses: actions/checkout@v2

      # Generate the snake game from the contributions graph
      - name: Generate snake game from contributions
        uses: Platane/snk@v2
        with:
          github_user_name: <YOUR_USERNAME> # Replace this with your GitHub username
          gif_out_path: dist/github-contribution-grid-snake.gif

      # Upload the snake game GIF to the repository
      - name: Upload Snake Game GIF
        uses: actions/upload-artifact@v2
        with:
          name: snake-game
          path: dist/github-contribution-grid-snake.gif

<!--


**Deepeshgiri/Deepeshgiri** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

here is the sad news guys.. I have left my current job and now I am looking for jobs. any refferal will be highly appreciated.
