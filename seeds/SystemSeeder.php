<?php

namespace Themes\Demo\Seeds;

use Illuminate\Database\Seeder;
use Cms\Classes\Theme;
use Tailor\Models\SingleRecord;
// use Tailor\Facades\Blueprint;
use Tailor\Classes\BlueprintIndexer;


class SystemSeeder extends Seeder
{
    public function run()
    {
        $theme = Theme::getActiveTheme();
        $path = base_path("themes/{$theme->getDirName()}/seeds/data/about.json");

        if (!file_exists($path)) {
            echo "❌ File not found: $path\n";
            return;
        }

        $data = json_decode(file_get_contents($path), true);

        if (!is_array($data)) {
            echo "❌ Invalid JSON format in: $path\n";
            return;
        }
$item = $data[0]; // Only 1 page

    $entry = \Tailor\Models\SingleRecord::where('blueprint_uuid', $item['blueprint_uuid'])->first();
        dd($entry);

    if (!$entry) {
        $entry = new \Tailor\Models\SingleRecord();
        $entry->blueprint_uuid = $item['blueprint_uuid'];
    }

    $entry->title = $item['title'] ?? '';
    $entry->slug = $item['slug'] ?? '';
    $entry->_page_builder = $item['sections'] ?? [];

    $entry->save();

        echo "✅ About Page data seeded.\n";
    }
}
