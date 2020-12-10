({
    name: "HTTP", // Category Name
    description: "GET POST PUT to REST API",
    author: "microBlock",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#2ECC71", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="http_request">
                    <value name="url">
                        <shadow type="text">
                            <field name="TEXT">https://microblock.app/about.html</field>
                        </shadow>
                    </value>
                    <value name="data">
                        <shadow type="text">
                            <field name="TEXT"></field>
                        </shadow>
                    </value>
                    <value name="header">
                        <block type="lists_create_with">
                            <mutation items="1"></mutation>
                            <value name="ADD0">
                                <block type="text">
                                    <field name="TEXT">User-Agent: microBlock</field>
                                </block>
                            </value>
                        </block>
                    </value>
                </block>
            `
        },
        "http_get_status_code",
        "http_get_data_text",
        "http_get_data_number",
        "http_is_ok"
    ]
});
