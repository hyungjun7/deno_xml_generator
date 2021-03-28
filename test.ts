import Deno from "https://deno.land/std@0.91.0/node/fs.ts"
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
