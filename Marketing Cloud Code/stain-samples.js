(function (/* root, doc */) {

    <script runat="server">
      Platform.Load("core","1.1.5");
    
        var stainFilter = { Property: "Pricebook2Id", SimpleOperator: "equals", Value: "01s2J000001mwYVQAY" };
        var tcFilter = { Property: "Pricebook2Id", SimpleOperator: "equals", Value: "01s2J000001mwYaQAI" };
      
        var familyDE = DataExtension.Init("DE-EXTERNAL-KEY");
    
        var stainFamilyArray = familyDE.Rows.Retrieve(stainFilter);
        var tcFamilyArray = familyDE.Rows.Retrieve(tcFilter);
      
        var stainFamilyString = Stringify(stainFamilyArray);
        Variable.SetValue("@stainFamilyArray", stainFamilyString);
      
        var tcFamilyString = Stringify(tcFamilyArray);
        Variable.SetValue("@tcFamilyArray", tcFamilyString);
      
        var sampleDE = DataExtension.Init("DE-EXTERNAL-KEY");
    
        var stainCatalog = sampleDE.Rows.Retrieve(stainFilter);
        var tcCatalog = sampleDE.Rows.Retrieve(tcFilter);
      
        var stainCatalogString = Stringify(stainCatalog);
        Variable.SetValue("@stainCatalog", stainCatalogString);
      
        var tcCatalogString = Stringify(tcCatalog);
        Variable.SetValue("@tcCatalog", tcCatalogString);
      
    </script>
    
       var stainFamilyArray = %%=v(@stainFamilyArray)=%%;
    
       var tcFamilyArray = %%=v(@tcFamilyArray)=%%;
    
       var stainCatalog = %%=v(@stainCatalog)=%%
    
       var tcCatalog = %%=v(@tcCatalog)=%%
    
       for (var x = 0; x < stainFamilyArray.length; x++) {
    
        var familyHead = document.createElement('h3');
        familyHead.appendChild(document.createTextNode(stainFamilyArray[x].Family));
        var br = document.createElement('br');
    
        var stainContainer = document.getElementById('stain-container');
        stainContainer.appendChild(familyHead);
    
        for (var i = 0; i < stainCatalog.length; i++) {
    
            if (stainCatalog[i].Family === stainFamilyArray[x].Family){
    
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = stainCatalog[i].Web_Name;
                checkbox.name = 'LogSample';
                checkbox.value = stainCatalog[i].ProductCode;
    
                var label = document.createElement('label')
                label.htmlFor = stainCatalog[i].Web_Name;
                label.appendChild(document.createTextNode(stainCatalog[i].Web_Name));
    
                var br = document.createElement('br');
    
                var stainContainer = document.getElementById('stain-container');
                stainContainer.appendChild(checkbox);
                stainContainer.appendChild(label);
                stainContainer.appendChild(br);
            }
        }   
        }
    
        for (var x = 0; x < tcFamilyArray.length; x++) {
    
        var familyHead = document.createElement('h3');
        familyHead.appendChild(document.createTextNode(tcFamilyArray[x].Family));
        var br = document.createElement('br');
    
        var tcContainer = document.getElementById('top-coat-container');
        tcContainer.appendChild(familyHead);
                                                 
        for (var i = 0; i < tcCatalog.length; i++) {
    
            if (tcCatalog[i].Family === tcFamilyArray[x].Family){
    
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = tcCatalog[i].Web_Name;
                checkbox.name = 'LogSample';
                checkbox.value = tcCatalog[i].ProductCode;
    
                var label = document.createElement('label')
                label.htmlFor = tcCatalog[i].Web_Name;
                label.appendChild(document.createTextNode(tcCatalog[i].Web_Name));
    
                var br = document.createElement('br');
    
                var tcContainer = document.getElementById('top-coat-container');
                tcContainer.appendChild(checkbox);
                tcContainer.appendChild(label);
                tcContainer.appendChild(br);
            }
        }  
                                                    
        }
    
    }(window, document));