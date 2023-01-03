USE [Immersed]
GO

/****** Object:  UserDefinedTableType [dbo].[IntFileIdUserIdTable]    Script Date: 1/3/2023 12:50:39 PM ******/
CREATE TYPE [dbo].[IntFileIdUserIdTable] AS TABLE(
	[FileId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[FileId] ASC
)WITH (IGNORE_DUP_KEY = OFF)
)
GO


