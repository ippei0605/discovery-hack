'use strict';

// モジュールを読込む。
const
    context = require('./context'),
    discovery = require('./discovery');

const params = {
    "environment_id": context.id,
    "configuration_id": context.configuration_id,
    "name": "Default Configuration",
    "description": "The configuration used by default when creating a new collection without specifying a configuration_id.",
    "conversions": {
        "word": {
            "heading": {
                "fonts": [
                    {
                        "level": 1,
                        "min_size": 24,
                        "bold": false,
                        "italic": false
                    },
                    {
                        "level": 2,
                        "min_size": 18,
                        "max_size": 23,
                        "bold": true,
                        "italic": false
                    },
                    {
                        "level": 3,
                        "min_size": 14,
                        "max_size": 17,
                        "bold": false,
                        "italic": false
                    },
                    {
                        "level": 4,
                        "min_size": 13,
                        "max_size": 13,
                        "bold": true,
                        "italic": false
                    }
                ],
                "styles": [
                    {
                        "level": 1,
                        "names": [
                            "pullout heading",
                            "pulloutheading",
                            "header"
                        ]
                    },
                    {
                        "level": 2,
                        "names": [
                            "subtitle"
                        ]
                    }
                ]
            }
        },
        "pdf": {
            "heading": {
                "fonts": [
                    {
                        "level": 1,
                        "min_size": 24,
                        "max_size": 80
                    },
                    {
                        "level": 2,
                        "min_size": 18,
                        "max_size": 24,
                        "bold": false,
                        "italic": false
                    },
                    {
                        "level": 2,
                        "min_size": 18,
                        "max_size": 24,
                        "bold": true
                    },
                    {
                        "level": 3,
                        "min_size": 13,
                        "max_size": 18,
                        "bold": false,
                        "italic": false
                    },
                    {
                        "level": 3,
                        "min_size": 13,
                        "max_size": 18,
                        "bold": true
                    },
                    {
                        "level": 4,
                        "min_size": 11,
                        "max_size": 13,
                        "bold": false,
                        "italic": false
                    }
                ]
            }
        },
        "html": {
            "exclude_tags_completely": [
                "script",
                "sup"
            ],
            "exclude_tags_keep_content": [
                "font",
                "em",
                "span"
            ],
            "exclude_content": {
                "xpaths": []
            },
            "keep_content": {
                "xpaths": []
            },
            "exclude_tag_attributes": [
                "EVENT_ACTIONS"
            ]
        },
        "json_normalizations": []
    },
    "enrichments": [
        {
            "source_field": "text",
            "destination_field": "enriched_text",
            "enrichment": "natural_language_understanding",
            "options": {
                "features": {
                    "entities": {
                        "sentiment": true,
                        "emotion": false,
                        "limit": 50
                    },
                    "sentiment": {
                        "document": true
                    },
                    "categories": {},
                    "concepts": {
                        "limit": 8
                    }
                }
            }
        }
    ],
    "normalizations": []
};

discovery.updateConfiguration(params, (error, data) => {
    console.log(JSON.stringify(data, null, 2));
});