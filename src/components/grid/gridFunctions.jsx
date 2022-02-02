import { ColumnDirective } from "@syncfusion/ej2-react-grids";

export function GridField(field) {
  const sfdcDataType = field.item.datatype;
  switch (sfdcDataType) {
    case "boolean": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "comboBox": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "currency": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Right'
        />
      );
    }
    case "date": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "datetime": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "decimal": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Right'
        />
      );
    }
    case "double": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Right'
        />
      );
    }
    case "email": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "encryptedstring": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "id": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "int": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "long": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "percent": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "phone": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "picklist": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "reference": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "string": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "textArea": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    case "url": {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='150'
          textAlign='Left'
        />
      );
    }
    default: {
      return (
        <ColumnDirective
          field={field.item.name}
          headerText={field.item.name}
          width='100'
          textAlign='Right'
        />
      );
    }
  }
}
