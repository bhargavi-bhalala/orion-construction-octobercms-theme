# Orion Construction Theme for OctoberCMS

Orion Construction is a responsive, Tailwind-based OctoberCMS theme designed for modern construction and architecture websites. It features Tailor-powered sections, dynamic content management, and demo seed support for quick setup.

---

## 📁 Folder Structure

themes/
└── orion-construction/
├── assets/ # Tailwind CSS, JS, Images
├── content/
│ └── blueprints/ # Tailor blueprints
├── layouts/ # Layout templates
├── pages/ # CMS Pages
├── partials/ # Reusable blocks
├── seeds/ # Seed data (JSON)
├── theme.yaml # Theme metadata
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation

1. Clone or download this theme into your `themes/` directory:

```bash
git clone https://github.com/bhargavi-bhalala/orion-construction-octobercms-theme.git themes/orion-construction
```

🧩 Requirements
OctoberCMS v4.x

Tailor (Core Plugin, enabled by default)

Laravel Mix or Vite for frontend builds (optional)

🧱 Tailor Setup
This theme uses Tailor blueprints located in:

```
themes/orion-construction/blueprints/
```

To register them:
```
php artisan tailor:refresh
```
To list available blueprints:

```
php  artisan tailor:list
```

## Seed Demo Data
To import demo content (pages, sections, blog, etc.):

1.Ensure themes/orion-construction/seeds/ contains:

yaml
# seeder.yaml
```
    - name: About Page
    class: Tailor\Models\RecordImport
    file: seeds/data/about.json
    attributes:
    file_format: json
    blueprint_uuid: 010d1830-49e7-4d37-9d15-a4f7c684f5e0
```
2.Add a database seeder:

php
```
// themes/orion-construction/seeds/SystemSeeder.php

use Illuminate\Database\Seeder;

class SystemSeeder extends Seeder
{
    public function run()
    {
        \Tailor\Models\RecordImport::importFromYamlFile(
            base_path('themes/orion-construction/seeds/seeder.yaml')
            );
        }
    }
    ```
3.Run the seeder:

``` php artisan db:seed --class=SystemSeeder ```

🧰 Tailwind Build
If you're using Tailwind CSS with Laravel Mix or Vite:
``` 
npm install
npm run dev   # For development
npm run build # For production
```

Make sure tailwind.config.js and vite.config.js exist in the theme root.

✨ Features
Tailor-powered modular sections

TailwindCSS 3.x based responsive layout

Dynamic blog, about, team, project, and contact sections

Ready-to-import demo seed data

✍️ Author
Theme Name: Orion Construction
Author: Your Name
Website: yourwebsite.com
License: MIT or Custom License


🆘 Support
Open an issue on the GitHub repository or contact via [your support email].

yaml

---

Let me know if you want help preparing the actual blueprint files, `seeder.yaml`, and `about.json` / `blog.json` content files for this theme — I can generate sample ones based on the Tailor structure you've already shown.