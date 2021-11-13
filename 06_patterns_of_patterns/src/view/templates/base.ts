export const baseTemplate = (header: string) =>
  `<h1>${header}</h1>
    <div>
        <div>
            <input 
                type="radio" 
                name="currency" 
                id="inputView" 
                value="input" 
                checked
            >
            <label for="inputView">Input View</label>
        </div>
        <div class="rangeView_box">
            <input 
                type="radio" 
                name="currency" 
                id="rangeView" 
                value="range"
            >
            <label for="rangeView">Range View</label>
        </div>
    </div>
    
  <div class="main-content"></div>`;
