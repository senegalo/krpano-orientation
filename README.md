# KRPano Orientation 

This is a small KRPano plugin that aims to fix the orientation of the viewer between panos as if he was truely walking. 

It does that by labeling each view tag with the shift required to look to the true compass North, or Fixed orientation 
then detect the hotspot location in the 3D Space and calculates where the viewer should be looking on the next pano.

## Usage

1. Get the [latest release](https://github.com/senegalo/krpano-orientation/releases/latest)
2. Copy the plugin `krpano_orientation.js` file to the tour `plugin` folder.
3. In your `tour.xml` add the plugin tag 
```xml
<plugin name="krpano_orientation" keep="true" url="%SWFPATH%/plugins/krpano_orientation.js" devices="html5" />
```
4. In each scene's `<view/>` tag add 2 new properties called `refhlookat` and `refvlookat` as follows:
```xml
<view hlookat="0.0" vlookat="0.0" fovtype="MFOV" refhlookat="0" refvlookat="0"/>
```
**refhlookat** is the horizontal shift from the true North or the reference point you choose.

**refvlookat** is the vertical shift from the true North or the reference point your choose.
