import { ColumnDirective } from "@syncfusion/ej2-react-grids";

export function gridField(field) {
  const sfdcDataType = field.datatype;
  switch (sfdcDataType) {
    case "boolean": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "comboBox": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "currency": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "date": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "datetime": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "decimal": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "double": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "email": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "encryptedstring": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "id": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "int": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "long": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "percent": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "phone": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "picklist": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "reference": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "string": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "textArea": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    case "url": {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
    default: {
      return {
        field: field.name,
        headerText: field.name,
        width: "150",
        textAlign: "Left",
      };
    }
  }
}
