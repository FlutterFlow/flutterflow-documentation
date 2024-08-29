import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
    marketplaceSidebar: [{type: 'autogenerated', dirName: 'marketplace'}], // Adjust `dirName` as needed
    troubleshootingSidebar: [{type: 'autogenerated', dirName: 'troubleshooting'}], // Adjust `dirName` as needed
    changelogSidebar: [{type: 'autogenerated', dirName: 'changelog'}], // Adjust `dirName` as needed
    docsSidebar: [
        {
            type: 'doc',
            id: 'index',
            label: 'Getting Started',
        },
        'intro/quickstart',
        'intro/roadmap',
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
            collapsed: true,
            link: {
                type: 'generated-index',
                title: 'FlutterFlow Resources',
                description: 'Learn about the key building blocks in FlutterFlow',
                slug: '/resources',
                keywords: ['resources'],
            },
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
            collapsed: true,
            link: {
                type: 'generated-index',
                title: 'Key Concepts',
                description: 'Learn about the key concepts important for building with FlutterFlow',
                slug: '/concepts',
                keywords: ['concepts'],
            },
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
            collapsed: true,
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
            link: {
                type: 'generated-index',
                title: 'Third Party Integrations',
                description: 'Learn about the various third-party integrations available in FlutterFlow!',
                slug: '/integrations',
                keywords: ['guides'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'ff-integrations'
                }
            ],
        },
        {
            type: 'category',
            label: 'Generated Code',
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'generated-code'
                }
            ],
        },
        {
            type: 'category',
            label: 'Accounts & Billing',
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'accounts-billing'
                }
            ],
        },
        {
            type: 'category',
            label: 'Miscellaneous',
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'misc'
                }
            ],
        }
    ]
};

export default sidebars;
