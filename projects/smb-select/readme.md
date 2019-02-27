# Custom select component for angular 6+
Easy styleable custom select component for Angular 6+.

##### Install:
`npm i smb-select`

##### Usage:

Import `SmbSelectModule` in your `AppModule`

In your component: 
```
<smb-select>
    <smb-select-header class="select">Placeholder</smb-select-header>
    <smb-select-dropdown>
        <smb-select-option [value]='1'>Option 1</smb-select-option>
        <smb-select-option [value]='2'>Option 2</smb-select-option>
        <smb-select-option [value]='3'>Option 3</smb-select-option>
        <smb-select-option [value]='4'>Option 4</smb-select-option>
        <smb-select-option [value]='5'>Option 5</smb-select-option>
        <smb-select-option [value]='6'>Option 6</smb-select-option>
    </smb-select-dropdown>
</smb-select>
```