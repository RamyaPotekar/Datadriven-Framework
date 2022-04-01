Services.StartTransaction "Test1"

mrowcount=Datatable.GetSheet("Action1").GetRowCount
msgbox mrowcount

For i = 1 To mrowcount Step 1
       Datatable.SetCurrentRow(i)
       Modexe=Datatable("Moduleexe","Action1")
        'msgbox Modexe
	
If Modexe="Y" Then
	Modid=Datatable("ModuleID","Action1")
	msgbox Modid
	trowcount=Datatable.GetSheet("Action2").GetRowCount
	 msgbox trowcount
		   
For j= 1 To trowcount Step 1
         Datatable.SetCurrentRow(j)  
         
 If Modid=Datatable("ModuleID","Action2") and Datatable("Testcaseexe","Action2")="Y" Then
	  testcaseid=Datatable("TestcaseId","Action2")
	  msgbox testcaseid
	  
	  tsrowcount=Datatable.GetSheet("Action3").GetRowCount
	  msgbox tsrowcount
	  
For k = 1 To tsrowcount Step 1
	  Datatable.SetCurrentRow(k)
	  	
If testcaseid=Datatable("TestcaseId","Action3") Then
	keyword=Datatable("Keyword","Action3")	
	msgbox keyword
			
                 Select Case (keyword)
			
		       Case "ln"
		       Call Login("john","hp")	
		       
			Case "ca"
			Call CloseApp()
			
			Case "oo"
			Call OpenOrder()
			
			Case "uo"
			Call  UpdateOrder()
			
			Case "lnd"
			drowcount=Datatable.GetSheet("Action4").GetRowCount
			For r = 1 To drowcount Step 1
				Datatable.SetCurrentRow(r)
				
				Call Login(Datatable("username","Action4"),Datatable("password","Action4"))
				Call CloseApp()
				Next
				
			Case "ood"
			orrowcount=Datatable.GetSheet("Action4").GetRowCount
			For m = 1 To orrowcount Step 1
				Datatable.SetCurrentRow(m)
				Call OpenOrder(Datatable("orderno","Action4"))
			Next
		
 @@ hightlight id_;_2039797536_;_script infofile_;_ZIP::ssf24.xml_;_
			
			End Select
			

			End If	  		
	  		Next

		   End If		    
		Next
		
		
	End If
Next

Services.EndTransaction "Test1" @@ hightlight id_;_2117032824_;_script infofile_;_ZIP::ssf12.xml_;_

 @@ hightlight id_;_5769986_;_script infofile_;_ZIP::ssf1.xml_;_
 @@ hightlight id_;_2124474480_;_script infofile_;_ZIP::ssf4.xml_;_
 @@ hightlight id_;_2123529520_;_script infofile_;_ZIP::ssf21.xml_;_
