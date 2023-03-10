USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[Avatars_SelectById]    Script Date: 1/3/2023 12:36:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 --=============================================
 --Author: <Cho, Jerry>
 --Create date: <2022-12-7>
 --Description: <Avatar BackEND>
 --Code Reviewer:
 

 --MODIFIED BY: <Author>
 --MODIFIED DATE: 
 --Code Reviewer: 
 --Note: 
 --=============================================

ALTER proc [dbo].[Avatars_SelectById]
		@Id int

as
/*

	Declare @Id int = 1
	Execute dbo.Avatars_SelectById @Id


*/

begin

	Select 
			a.[Id]
		   ,a.[FileId]
		   ,f.[Name]
		   ,f.[Url]
		   ,a.[IsDeleted]
		   ,a.[CreatedBy]
		   ,u.[Email]
		   ,u.[FirstName]
		   ,u.[LastName]
		   ,a.[DateCreated]
	
	From	dbo.Avatars as a inner join dbo.Files as f
			on a.FileId =f.Id
			inner join dbo.Users as u
			on a.CreatedBy = u.Id
			

	Where	a.Id = @Id


end