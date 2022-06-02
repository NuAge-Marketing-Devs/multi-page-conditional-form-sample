# multi-page-conditional-form-sample

This is the HTML for a mult-page order form for samples. It opperates on "tabs" but appears as multiple pages. Upon submission, the user is redirected to the Thank You page.

_Dynamic Checkboxes_

Sample code is in Marketing Cloud Code -> stain-samples.js

Checkboxes are generated via a Code Resource in Marketing Cloud that retrieves and appends checkboxes to the form that are returned from the following lookups to Salesforce data:

        1. Stain Samples
        2. Top Coat Samples

It is essential that the code resource is in Marketing Cloud, as it is pulling data from Salesforce by leveraging Marketing Cloud Connect.

Blog article about using a code resource to generate dynamic content on a website: https://www.lesleyhiggins.com/post/build-dynamic-form-checkboxes-with-javascript-ssjs

Form Processing:
    
See https://github.com/NuAge-Marketing-Devs/sample-contact-us-form for an example of form processing in Marketing Cloud. 

