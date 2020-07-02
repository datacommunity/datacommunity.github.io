    $(document).ready(function () {
        var id = document.getElementsByClassName('data')[0].id;
        var json = 'https://raw.githubusercontent.com/datacommunity/' + id + '/master/data.json';
        $.getJSON(json, function (data) {

            var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
            $.each(data, function (index, value) {
                arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
            });

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
                th.innerHTML = col[i];
                tr.appendChild(th);
                tr.className = "table-primary";
            }

            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < arrItems.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    var content = arrItems[i][col[j]];
                    
                    // CREATE LINK
                    if (content.substring(0, 7) == "http://" || content.substring(0, 8) == "https://") { 
                        content = '<a href="' + content + '" target="_blank">Link</a>';
                    };
                    tabCell.innerHTML = content;
                }
            }

            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementsByClassName("data")[0];
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        });
    });
