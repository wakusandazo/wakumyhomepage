fetch("/wakumyhomepage/header.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("header.htmlを読み込めませんでした");
        }

        return response.text();
    })
    .then(data => {
        document.getElementById("common-header").innerHTML = data;
    })
    .catch(error => {
        console.error("ヘッダーの読み込みに失敗しました:", error);
    });