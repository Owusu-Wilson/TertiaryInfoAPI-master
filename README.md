# Tertiary Info Hub

#### Provides an interface along with an api serving data of all tertiary institutions in Ghana.

## Screenshots

![App Screenshot](https://github.com/Owusu-Wilson/TertiaryInfoAPI/blob/master/screenshot.png)

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## API Reference

#### Get all items

```http
  GET /universities
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `acronym` | `string` | Acronym of the institution |

#### Get institution by name, region or acronym

```http
  GET /search/name/?name=
```

```http
  GET /search/region/?region=
```

```http
  GET /search/acronym/?acronym=
```

| Parameter                 | Type     | Description                                                          |
| :------------------------ | :------- | :------------------------------------------------------------------- |
| `name` `region` `acronym` | `string` | **Required**. Name od institution (just part of the name is allowed) |

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the frontend directory

```bash
  cd frontend
```

Install dependencies for the frontend - a NextJS app

```bash
  npm install or yarn install
```

Start the server

```bash
  npm run start
```

<hr>
Go to the backend directory

```bash
  cd backend
```

Install dependencies for the backend - a FastAPI app

```bash
  pip install -r requrements.txt
```

Start the server

```bash
  python main.py
```

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Authors

- [@Owusu Wilson](https://www.github.com/Owusu-Wilson)

# Hi, I'm Wilson! 👋

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/wilson-owusu)

## 🛠 Skills

Javascript, HTML, CSS, Python, Redis, MongoDB.

## License

[MIT](https://choosealicense.com/licenses/mit/)
