

## Enable Pull to Refresh
If you've enabled the Single Time Query for a Backend Query in a scrollable widget, it won't refresh the list when items are updated in the backend. To address this, add a pull-to-refresh feature.

This user interface pattern allows users to manually refresh content by pulling down the content area, such as a list. When pulled down sufficiently and released, the app will refresh, fetching the latest data or updates.

<div class="video-container"><iframe src="https://www.loom.
com/embed/d346382211cb4ee3a0d113dd5520f034?sid=e994b1b5-8da1-4b30-9244-c330475d5c09" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<p></p>


To enable pull to refresh:

1. Select your scrollable widget, such as `ListView`, `GridView`, or `StaggeredView`. 
2. Move to the properties panel and select the **Backend Query**. 
3. Open the already added query (e.g., Query collection or API call) and make sure the **Single Time Query** is enabled. 
4. Switch on the **Enable Pull to Refresh** toggle. This will automatically add the **Refresh Database Request** action on a pull to refresh gesture.

<div class="video-container"><iframe src="https://www.loom.
com/embed/a83bfb12645340ae80a36ccf2cb9a63d?sid=28c284ff-342d-4535-bf0e-a288ca52d15c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


