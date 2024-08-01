import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';
import Feedback from '../../../components/Feedback/index.js';

export default function DocItemFooter() {
    const {metadata} = useDoc();
    const {
        editUrl,
        lastUpdatedAt,
        formattedLastUpdatedAt,
        lastUpdatedBy,
        tags,
        unversionedId,
    } = metadata;
    const canDisplayTagsRow = tags.length > 0;
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

    if (!canDisplayFooter) {
        return null;
    }
    return (

        <footer
            className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
            <Feedback resource={unversionedId} />
            {canDisplayTagsRow && (

                <div
                    className={clsx(
                        'row margin-top--sm',
                        ThemeClassNames.docs.docFooterTagsRow,
                    )}>
                    <div className="col">
                        <TagsListInline tags={tags}/>
                    </div>
                </div>
            )}
            {canDisplayEditMetaRow && (
                <EditMetaRow
                    className={clsx(
                        'margin-top--sm',
                        ThemeClassNames.docs.docFooterEditMetaRow,
                    )}
                    editUrl={editUrl}
                    lastUpdatedAt={lastUpdatedAt}
                    lastUpdatedBy={lastUpdatedBy}
                />
            )}
        </footer>
    );
}
