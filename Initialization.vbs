Dim objuft

Set objuft=CreateObject("QuickTest.Application")
objuft.visible=True
objuft.launch
objuft.open("C:\Users\sfjbs\Documents\DataDrivenFramework\Driver\Driver1")
objuft.Test.Run
objuft.Test.Close
objuft.quit
set objuft=nothing