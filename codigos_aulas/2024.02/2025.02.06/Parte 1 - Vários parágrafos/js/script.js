window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function () {
        var p = document.createElement("p");
        // Opção 1:
        p.textContent = document.getElementById('txtNome').value

        // Opção 2: pode-se usar tags no texto
        p.innerHTML = `<h2> ${document.getElementById('txtNome').value} </h2>`;

        // Opção 3:
        var texto = document.createTextNode(document.getElementById('txtNome').value);
        p.appendChild(texto); 
        
        document.getElementById('box').appendChild(p);
    })
})

// Qual usar?
// Opção 1: p.textContent = document.getElementById('txtNome').value
// 🔹 Mais segura e performática, pois trata tudo como texto, impedindo a execução de códigos HTML maliciosos.
// Vantagens:
// Protege contra injeção de código malicioso (XSS), pois trata tudo como texto.
// Mais rápido, pois evita parsing de HTML.
// Desvantagem:
// Se precisar renderizar HTML (exemplo: <b>Texto em negrito</b>), ele será exibido como texto puro.
// ----------------------
// Opção 2: p.innerHTML = <h2> ${document.getElementById('txtNome').value} </h2>;
// Boa se você precisa que tags HTML sejam interpretadas.
// antagens:
// Permite formatação HTML (exemplo: <b>Texto em negrito</b> será interpretado corretamente).
// Desvantagem:
// Risco de segurança: Se value vier de uma entrada do usuário, pode permitir XSS (Cross-Site Scripting), injetando <script> malicioso.
// Mais lento que textContent, pois o navegador precisa processar o HTML.
// 💡 Solução para maior segurança: Se quiser evitar XSS ao usar innerHTML, sanitizar o valor antes de inserir no DOM é uma boa prática.
// --------------------------------------------------------
// Opção 3: createTextNode()
// 🔹 Funciona de forma semelhante a textContent, mas é mais verboso.
// Vantagens:
// Mesmo nível de segurança que textContent.
// Desvantagem:
// Mais verboso, sem oferecer benefícios em relação ao textContent.
// ---------------------------------------
// Conclusão:
// 1️⃣ Se quiser segurança e desempenho: ✅ Use textContent (Opção 1).
// 2️⃣ Se precisar renderizar HTML: ✅ Use innerHTML (Opção 2), mas com cuidado contra XSS.
// 3️⃣ Se quiser segurança, mas usando um método alternativo: createTextNode() (Opção 3), mas textContent já é suficiente.

// 🚀 Recomendação final: Use textContent sempre que possível!