import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
    troubleshootingSidebar: [{type: 'autogenerated', dirName: 'troubleshooting'}], // Adjust `dirName` as needed
    changelogSidebar: [{type: 'autogenerated', dirName: 'changelog'}], // Adjust `dirName` as needed
    docsSidebar: [
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: ['index'],
        },
        'intro/quickstart',
        {
            type: 'category',
            label: 'Before You Begin',
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'intro/before-you-begin'
                }
            ],
        },
        {
            type: 'category',
            label: 'Understanding FlutterFlow UI',
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'intro/ff-ui'
                }
            ],
        },
        {
            type: 'category',
            label: 'Resources',
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'resources'
                }
            ],
        },
        {
            type: 'category',
            label: 'Building Concepts',
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'ff-concepts'
                }
            ],
        },
        {
            type: 'category',
            label: 'Testing & Publishing',
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'testing-deployment-publishing'
                }
            ],
        },
        {
            type: 'category',
            label: 'Integrations',
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'ff-integrations'
                }
            ],
        }
    ]
};

export default sidebars;
