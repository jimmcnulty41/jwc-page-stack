
function bootstrap(html_text) {

  customElements.define(
    "sketchery-feature",
    class SketcheryFeature extends HTMLElement {
      // Fires when an instance of the element is created or updated
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const template = document.createElement("template");
        template.innerHTML = html_text;
        shadow.appendChild(template.content.cloneNode(true));
      }

      // Fires when an instance was inserted into the document
      connectedCallback() {
        const tags = this.getAttribute("tags")?.split(",");

        const ul = this.shadowRoot?.querySelector("#tagContainer > ul");
        if (!ul) {
          throw new Error("zoinktripes!");
        }
        tags?.forEach((tag) => {
          const tagEl = document.createElement("li");
          const x = document.createElement("span");
          x.innerText = tag;
          x.addEventListener("click", () => {
            this.dispatchEvent(new CustomEvent("tag-click", { detail: tag }));
          });
          tagEl.appendChild(x);
          ul.appendChild(tagEl);
        });

        const img = this.shadowRoot?.querySelector("#featureContainer > img");
        if (!img) {
          throw new Error("yikes");
        }
        const src = this.getAttribute("src");
        img.id = "feature";
        if (src) img.setAttribute("src", src);
      }

      // Fires when an instance was removed from the document
      disconnectedCallback() { }

      // Fires when an attribute was added, removed, or updated
      // attributeChangedCallback(attrName, oldVal, newVal) {}

      // Fires when an element is moved to a new document
      adoptedCallback() { }
    }
  )
}

const html = ```
<div></div>
```;

bootstrap(html);