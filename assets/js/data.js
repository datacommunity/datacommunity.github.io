    $(document).ready(function () {
        var id = document.getElementsByClassName('data')[0].id;
        var json = 'https://raw.githubusercontent.com/datacommunity/' + id + '/master/data.json';
        $.getJSON(json, function (data) {

            var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
            $.each(data, function (index, value) {
                arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
            });
            
            arrItems.sort(); 

            // EXTRACT VALUE FOR TABLE HEADER.
            var col = [];
            for (var i = 0; i < arrItems.length; i++) {
                for (var key in arrItems[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
            table.className = "table table-hover";


            // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
           
            var tr = table.insertRow(-1);                   // TABLE ROW.

            for (var i = 0; i < col.length; i++) {
            
                var th = document.createElement("th");      // TABLE HEADER.
                if (col[i] != "Url") {
                  th.innerHTML = col[i];
                  tr.appendChild(th);
                  tr.className = "table-primary";
                 	}
            }

            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < arrItems.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var content = "";
                    var tabCell = "";
                    
		    //SKIP URL COLUMN
                    if (arrItems[i][col[j]] !== arrItems[i]["Url"]) {
			content = arrItems[i][col[j]];
			tabCell = tr.insertCell(-1);
                        
			//USE URL FOR THE NAME COLUMN
                        if (content == arrItems[i]["Name"]) {
                        	content = '<a href="' + arrItems[i]["Url"] + '" target="_blank">' + arrItems[i]["Name"] + '</a>';              
                      }
                     }
                    tabCell.innerHTML = content;
                }
            }

            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementsByClassName("data")[0];
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        });
    });
