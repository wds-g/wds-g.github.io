---
title: 保持原生WPF控件样式
createTime: 2024/09/25 22:08:06
permalink: /demo/l21dlqno/
---
使用Devexpress WPF的主题时若要保留WPF原生控件的样式，使用以下代码：
```C#
public partial class App : Application {
    static App() {
        CompatibilitySettings.UseLightweightThemes = true;
        ApplicationThemeHelper.ApplicationThemeName = LightweightTheme.Win11Dark.Name;
        LightweightThemeManager.AllowStandardControlsTheming = false;
    }
}
```
[foo](./保持原生WPF控件样式.md)
