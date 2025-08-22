# Cocktails 🍸
This is another simple frontend-only project I built to revise React.js after returning from summer vacation (hence the cocktail theme).
The app displays various cocktails, which can be filtered by categories and tags, and clicking on a drink reveals more details.
![Screenshot of the project](github_assets/screenshot1.png)
![Screenshot of the project](github_assets/screenshot2.png)

### The data:
I kept all the data in a *.json* file. Each cocktail has its own *id, name, short and long description, ingredients (each with a name and amount), image, category and tags*. I passed these as props into components. I also created a separate *.json* file for categories, so I could map through it for the filter buttons (although I now realise I took the way less optimal way - I should have just used an array).

### What I used:
- useState
- useMemo
- ReactRouter
