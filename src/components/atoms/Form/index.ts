import { Form as FormPrimitive } from "formsnap";

import * as SelectComp from "../Select";

import Item from "./Item.svelte";
import Input from "./Input.svelte";
import Description from "./Description.svelte";
import Label from "./Label.svelte";
import Validation from "./Validation.svelte";

import NativeSelect from "./NativeSelect.svelte";

import Select from "./Select.svelte";
import SelectTrigger from "./SelectTrigger.svelte";
import Button from "./Button.svelte";

const Root = FormPrimitive.Root;
const Field = FormPrimitive.Field;

const NativeRadio = FormPrimitive.Radio;
const SelectContent = SelectComp.Content;
const SelectLabel = SelectComp.Label;
const SelectGroup = SelectComp.Group;
const SelectItem = SelectComp.Item;
const SelectSeparator = SelectComp.Separator;

export {
  Root,
  Field,
  Item,
  Input,
  Label,
  Button,
  Select,
  Validation,
  Description,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  NativeSelect,
  NativeRadio,
  //
  Root as Form,
  Field as FormField,
  Item as FormItem,
  Input as FormInput,
  Label as FormLabel,
  Description as FormDescription,
  Validation as FormValidation,
  NativeSelect as FormNativeSelect,
  NativeRadio as FormNativeRadio,
  Select as FormSelect,
  SelectContent as FormSelectContent,
  SelectLabel as FormSelectLabel,
  SelectGroup as FormSelectGroup,
  SelectItem as FormSelectItem,
  SelectSeparator as FormSelectSeparator,
  SelectTrigger as FormSelectTrigger,
  Button as FormButton,
};
