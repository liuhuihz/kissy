/**
 * backColor button.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/back-color/index", function (S, Editor, Button, cmd) {

    function backColor(config) {
        this.config = config || {};
    }

    S.augment(backColor, {
        renderUI: function (editor) {
            cmd.init(editor);
            Button.init(editor, {
                cmdType: "backColor",
                tooltip: "背景颜色"
            });
        }
    });

    return backColor;

}, {
    requires: ['editor', '../color/btn', './cmd']
});