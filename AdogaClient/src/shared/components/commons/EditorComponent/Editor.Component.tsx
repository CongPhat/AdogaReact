import React from "react";
import "./style.scss";
import { Editor } from "@tinymce/tinymce-react";
import { Spin } from "antd";

interface Iprops {
  getDataFinish?: (data) => void;
  getData?: (data) => void;
  dataInit?: string;
  height?: any;
  width?: number;
  initialValue?: any;
  value?: string;
  bgWhite?: boolean;
  label?: string;
}

const EditorComponent = (props: Iprops) => {
  const handleEditorChange = (content, editor) => {
    props.getData(content);
  };

  return (
    <div
      className="wrap-editor"
      style={{
        position: "relative",
        width: props.width ? props.width : "100%",
        height: props.height ? props.height : "380px",
      }}
    >
      <div
        className="loading"
        style={{
          position: "absolute",
          top: "150px",
          left: "50%",
          backgroundColor: "ffffff",
        }}
      >
        <Spin size="large" />
      </div>
      <div className="label">{props.label || "Editor"}</div>
      <Editor
        apiKey="2qrkbxpslvv1tsyi31qlw8ted2erhdtzuif8hzo3mxdtmpq1"
        init={{
          width: props.width,
          height: props.height ? props.height : "380px",
          entity_encoding: "raw",
          content_style: `p { margin: 0} body{margin: 10px ${"background-color: #ffffff"} }`,
          plugins:
            "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
          imagetools_cors_hosts: ["picsum.photos"],
          menubar: "file edit view insert format tools table help",
          toolbar:
            "code | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
          toolbar_sticky: true,
          autosave_ask_before_unload: true,
          autosave_interval: "30s",
          autosave_prefix: "{path}{query}-{id}-",
          autosave_restore_when_empty: false,
          autosave_retention: "2m",
          image_advtab: true,
          content_css: "//www.tiny.cloud/css/codepen.min.css",
          link_list: [
            { title: "My page 1", value: "http://www.tinymce.com" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_list: [
            { title: "My page 1", value: "http://www.tinymce.com" },
            { title: "My page 2", value: "http://www.moxiecode.com" },
          ],
          image_class_list: [
            { title: "None", value: "" },
            { title: "Some class", value: "class-name" },
          ],
          importcss_append: true,
          file_picker_callback: function (callback, value, meta) {
            /* Provide file and text for the link dialog */
            if (meta.filetype === "file") {
              callback("https://www.google.com/logos/google.jpg", {
                text: "My text",
              });
            }

            /* Provide image and alt text for the image dialog */
            if (meta.filetype === "image") {
              callback("https://www.google.com/logos/google.jpg", {
                alt: "My alt text",
              });
            }

            /* Provide alternative source and posted for the media dialog */
            if (meta.filetype === "media") {
              callback("movie.mp4", {
                source2: "alt.ogg",
                poster: "https://www.google.com/logos/google.jpg",
              });
            }
          },
          selector: "textarea",
          init_instance_callback: function (editor) {
            var freeTiny = document.querySelector(".tox .tox-notification--in");
            freeTiny.style.display = "none";
          },
          templates: [
            {
              title: "New Table",
              description: "creates a new table",
              content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
            },
            {
              title: "Starting my story",
              description: "A cure for writers block",
              content: "Once upon a time...",
            },
            {
              title: "New list with dates",
              description: "New List with dates",
              content:
                '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
            },
          ],
          template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
          template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
          image_caption: true,
          quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
          noneditable_noneditable_class: "mceNonEditable",
          toolbar_mode: "sliding",
          contextmenu: "link image imagetools table",
        }}
        initialValue={props.initialValue}
        onEditorChange={handleEditorChange}
        value={props.value}
      />
    </div>
  );
};
export default EditorComponent;

// tinymce
