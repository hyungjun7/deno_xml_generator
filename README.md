# deno_xml_generator
A function that allows you to convert shallow-depth objects into XML.

### Example
```javascript
import {xmlGenerator} from './mod.ts'

const data: Object = {
  id: 1,
  name: "hyungjunlee",
  age: 24,
  friends: ["isaac", "hyungjun"],
  test: {
      test: 1,
      test2: 'string'
  }
};

await xmlGenerator(data, 'test')
```
### XML
```xml
<?xml version="1.0"?>
<data>
  <id>1</id>
  <name>hyungjunlee</name>
  <age>24</age>
  <friends>
    <value>isaac</value>
    <value>hyungjun</value>
  </friends>
  <test>
    <test>1</test>
    <test2>string</test2>
  </test>
</data>
```
