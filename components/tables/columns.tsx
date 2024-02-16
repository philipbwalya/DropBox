"use client";

import { FileType } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import { FileIcon } from "react-file-icon";
import prettyBytes from "pretty-bytes";
import { COLOR_EXTENSION_MAP } from "@/constant";
import defaultStyles from "@/defaultStyles";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      // const defaultStyles = {
      //   // Define default styles here based on the color mapping
      //   // For example:
      //   pdf: { backgroundColor: COLOR_EXTENSION_MAP.pdf },
      //   docx: { backgroundColor: COLOR_EXTENSION_MAP.docx },
      //   // Add other file extensions as needed
      // };
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            // @ts-ignore
            // {...defaultStyles[extension]}
            style={defaultStyles[extension]}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "filename",
    header: "filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      <a
        href={renderValue() as string}
        target="_blank"
        className="underline text-blue-500 hover:text-blue-600"
      >
        Download
      </a>;
    },
  },
];
